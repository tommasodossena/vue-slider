var vm = new Vue(
	{
		el: '#root',
        data: {
            images: [
                {
                    url: "img/g1.jpg",
                    descrizione: "Getty museum front view",
                },
                {
                    url: "img/g2.jpg",
                    descrizione: "Getty museum detail",
                },
                {
                    url: "img/g3.jpg",
                    descrizione: "Getty museum side view",
                },
                {
                    url: "img/g4.jpg",
                    descrizione: "Getty museum sunset view",
                }
            ],
            imgIndex: 0,
            autoplay: null
        },
        mounted: function() {
            // Carousel autoplay event
            this.autoplay = setInterval(this.nextImage, 4000);
            
            // // Carousel keyboard event
            // const component = this;
            // window.addEventListener('keydown', function (e) {
            //     if ( e.which == 37 ) {
            //         component.prevImage();
            //     } else if (e.which == 39 ) {
            //         component.nextImage();
            //     }
            // });
        },
        methods: {
            nextImage: function() {
                this.imgIndex++;

                if ( this.imgIndex == this.images.length ) {
                    this.imgIndex = 0;
                }
            },
            prevImage: function() {
                this.imgIndex--;

                if ( this.imgIndex < 0 ) {
                    this.imgIndex = this.images.length - 1;
                }
            }
        }
	}
);
