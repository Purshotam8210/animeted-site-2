var overlay = document.querySelector('#overlay');
var closebtn = document.querySelector('#closebtn')

 
var time2 = gsap.timeline();

 closebtn.addEventListener('click',function(){
    time2.reverse();
    setTimeout(function(){
        var worksamples = document.querySelector('#worksamples');
                worksamples.style.display = 'none';
    },2500)
    
});


 let timeline = gsap.timeline();
timeline.to('#overlay',{
    duration: 1,
    width: 4000,
    height: 4000,
    ease: 'expo.inout'
})
.to('#overlay h1 span',{
    top: '0%',
    duration: 0.5,
    ease: 'expo.inout'
})
.to('#overlay h1 span',{
    top: '-100%',
    duration: 0.5,
    delay: .5,
    ease: 'expo.inout'
})
.to('#overlay',{
    opacity:0,
    duration: 3,
    onComplete: function(){
        overlay.style.display ='none';
    },
    ease: 'expo.inout'
})

.from('#nav h4',{
    x: 40,
    duration: 0.5,
    opacity:0,
    ease: 'expo.inout'
})
.from('#nav #icons i',{
    stagger:0.2,
    x: 20,
    duration: 0.5,
    opacity:0,
    ease: 'expo.inout'
})
.from('#maindetails .line',{
    width:0,
    duration: 1.5,
    stagger: 1,
    ease: 'expo.inout'
})
.from('#maindetails .detsanim',{
    stagger:.3,
    y: 30,
    duration: 0.5,
    opacity:0,
    delay: -1,
    ease: 'expo.inout'
})





.from('#right #links a',{
    stagger: 0.2,
    x: 30,
    duration: 0.5,
    opacity:0,
    
    ease: 'expo.inout'
})


function   animateTheLayer(){
    
        time2.to('#rightoverlay',{
            duration: 1.5,
            ease:'expo.inOut',
            left:0,
            onComplete:function(){
                var worksamples = document.querySelector('#worksamples');
                worksamples.style.display = 'initial';
            }
        })

        .from('#rightoverlay h3',{
            delay: -0.7,
            duration: 1,
            opacity:0,
            ease:'expo.inOut',
            x:40,
            
        })

        .from('#rightoverlay h3 span',{
            duration: 1,
            delay:-.5,
            ease:'expo.inOut',
            opacity:0,

        })
        .from('#rightoverlay .work',{
            duration: 0.5,
            
            ease:'expo.inOut',
            opacity:0,

        })
        .from('#rightoverlay .work h4',{
            stagger:0.3,
            duration: 1,
            ease:'expo.inOut',
            opacity:0,
            x:30

        })
        .from('#rightoverlay .work .holder img',{
            stagger:0.3,
            duration: 0.5,
            delay:-1.5,
            ease:'expo.inOut',
            x:'100%'

        })
        // setTimeout(function(){
        //     time2.reverse();
        // },5000);
        
        
}
//   animateTheLayer();



