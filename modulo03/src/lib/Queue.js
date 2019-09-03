import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

/**
 * For each jobs on array bellow(jobs) is created a queue on init method
 * Inside to each queue is stored the bee which is the instance that connect to Redis
 * and the handle which is responsible for process the queue
 * (using the variable from context. I.e: email, body, etc) then every time when occur
 * a new job (add method) the processQueue is started processing it in background
 */
const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  // Initializing queues
  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  // Adding jobs to queues
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  // Process the queues
  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.process(handle);
    });
  }
}

export default new Queue();
