const videosList = [
    {
        video: 'images/vid-4.mp4',
        title: 'Video 1'
    },
    {
        video: 'images/vid-5.mp4',
        title: 'Video 2'
    },
    {
        video: 'images/vid-6.mp4',
        title: 'Video 3'
    },
    {
    	video: 'images/vid-7.mp4',
    	title: 'Video 4'
    },
    {
    	video: 'images/vid-8.mp4',
    	title: 'Video 5'
    },
    {
    	video: 'images/vid-9.mp4',
    	title: 'Video 6'
    },
    {
    	video: 'images/vid-10.mp4',
    	title: 'Video 7'
    },
    {
    	video: 'images/vid-11.mp4',
    	title: 'Video 8'
    },
    ]
    
    const categories = [...new Set(videosList.map((item) => { return item }))]
    document.getElementById('videosList').innerHTML = categories.map((item) => {
        var { video, title } = item;
        return (
            `<div class="list active">
            <video src=${video} class="list-video"></video>
            <h3 class="list-title">${title}</h3>
            </div>`
            )
    }).join('')
    
    let videoList = document.querySelectorAll('.video-list-container .list');
    videoList.forEach(remove => { remove.classList.remove('active') });
    videoList.forEach(vid => {
        vid.onclick = () => {
            videoList.forEach(remove => { remove.classList.remove('active') });
            vid.classList.add('active');
            let src = vid.querySelector('.list-video').src;
            let title = vid.querySelector('.list-title').innerHTML;
            document.querySelector('.main-video-container .main-video').src = src;
            document.querySelector('.main-video-container .main-video').play();
            document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        };
    });