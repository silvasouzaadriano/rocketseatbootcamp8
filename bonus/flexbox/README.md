### Extensions

      Install Live Server (current version 5.6.1)

      In order to use it on project, with index.html opened proceed with:

        1) Control + Shift + P
        3) Choose option Live Server: Open with Live Server

        Note that for any change done on index.html, the browser will 
        reload it automatically

### Instructions

  1) For activate the flexbox its necessary always set the display: flex (css) on main div

    i.e: 
      #app {
        display: flex;
      }

  2) The property which change the standard(row) way which the flexbox uses is the flex-direction

    i.e: 
    #app {
        display: flex;
        flex-direction: row;
      }

  3) The main properts of flexbox are:

    align-items
    justify-content

    1) When using flex-direction: row
      - The align-items will align the items vertically
      - The justify-content will align the items horizontally

      Note that vertically and/or horizontally are managed by flex-direction row or column.
      It means that for:
        - For flex-direction: row, the content always will be aligned Y axis
        - For flex-direction: column, the content always will be aligned on X axis
    

    2) The main values used for both are
      - flex-start, meaning always align the items in the top of body
      - center, meaning always align the items in the center of body
      - flex-end, menaing always align the items in the bottom of body

    3) Exclusivelly for justify-content, there are the values
      - space-between, meaning add an equal space among all divs, but with no
      spaces on the begging and end of divs
      - space-between, meaning basically the same of space-between, however 
      adding also a little bit of space in the begging and end of divs

  4) There are two properts on flexbox which allows if an element of screen 
  can be resized.

    1) flex-grow, meaning that the element accepts be resized to fit to it container.
    On this case utilizing all content of main container (div) resizing to big size
    
    2) flex-shrink, meaning that the element is able to be expressed to fit in it container.
    On this case the element will be resized to small size every time using zoom, for instance.

    3) However, there is only one propert which incorporate the functionalities of flex-grow and 
    flex-shrink. This propert is the flex

  5) Breaks down lines - The property flex-wrap force the flexbox break lines.
  Note that it only works with no utilizating of flex-grow. Working together flex-wrap, there is
  the property  align-content, which aligns the elements when exist an break down line. 
  On this case, having the same properties of justify-content

  6) Ordering property. For responsible layouts usually when occur zoom in/ou the elements might change positions



  

