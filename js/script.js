var vm = new Vue(
	{
		el: '#root',
        data: {
            images: [
                {
                    url: "https://via.placeholder.com/800x400/ef476f/FFFFFF?text=Slide+1",
                    descrizione: "placeholder",
                },
                {
                    url: "https://via.placeholder.com/800x400/ffd166/FFFFFF?text=Slide+2",
                    descrizione: "placeholder",
                },
                {
                    url: "https://via.placeholder.com/800x400/06d6a0/FFFFFF?text=Slide+3",
                    descrizione: "placeholder",
                },
                {
                    url: "https://via.placeholder.com/800x400/118ab2/FFFFFF?text=Slide+4",
                    descrizione: "placeholder",
                }
            ],
            imgIndex: 0
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
