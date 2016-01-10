  var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 75,
        variance: "1",
        seed: 'i7ons',
        x_colors: 'GnBu',
        
        
    });
    document.body.appendChild(pattern.canvas(background));
    window.addEventListener("resize", Regenerate);

    function Regenerate() {
          var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 75,
        variance: "1",
        seed: 'i7ons',
        x_colors: 'GnBu',
        
        
    });
     document.body.appendChild(pattern.canvas(background));
    }