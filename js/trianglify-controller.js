  var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 85,
        variance: "1",

        x_colors: 'GnBu',
     

        
        
    });
    document.body.appendChild(pattern.canvas(background));
    window.addEventListener("resize", Regenerate);

    function Regenerate() {
          var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 85,
        variance: "1",
     
        x_colors: 'GnBu',
        
        
    });
     document.body.appendChild(pattern.canvas(background));
    }