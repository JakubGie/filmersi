const TimeAgo = (date) => {
    var postDate = new Date(date.date)
    const seconds = Math.floor((new Date() - postDate) / 1000);

  
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + '  lat temu';
    }
  
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' miesięcy temu';
    }
  
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' dni temu';
    }
  
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' godz. temu';
    }
  
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' min. temu';
    }
  
    if(seconds < 10) return 'przed chwilą';
  
    return Math.floor(seconds) + ' sekund temu';
  }

  export default TimeAgo