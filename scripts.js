const animationTimeline = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}});

animationTimeline.to("nav", {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
                 .to(".hero-header, .hero-text", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', stagger: .4, opacity: 1, y: 0}, "")
                 .to(".hero-button > a.d-none, .hero-button button", {opacity: 1, stagger: .4})
                 .to(".case-studies-header", {width: '100%', opacity: 1}, "-=1")
                 .to(".case-studies-card", {stagger: .15, duration: 1.2, opacity: 1, y: 0}, "-=.8")