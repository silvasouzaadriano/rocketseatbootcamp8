import Queue from './lib/Queue';

/**
 * This file was created basically the application
 * will not be ran on the same node of the queue, once
 * might be running our queue in server on the processor core
 * with more or less resources totally a part of the application.
 * With this approach the queue never will affect the application performance.
 */
Queue.processQueue();
