export function timeAgo(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);

    date.setHours(date.getHours() + 7);
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
    const minutes = 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const weeks = days * 7;
    const months = days * 30;
    const years = days * 365;
  
    if (diffInSeconds < minutes) {
      return `${diffInSeconds}sec ago`;
    } else if (diffInSeconds < hours) {
      const diffMinutes = Math.floor(diffInSeconds / minutes);
      return `${diffMinutes}mi ago`;
    } else if (diffInSeconds < days) {
      const diffHours = Math.floor(diffInSeconds / hours);
      return `${diffHours}h ago`;
    } else if (diffInSeconds < weeks) {
      const diffDays = Math.floor(diffInSeconds / days);
      return `${diffDays}d ago`;
    } else if (diffInSeconds < months) {
      const diffWeeks = Math.floor(diffInSeconds / weeks);
      return `${diffWeeks}wk ago`;
    } else if (diffInSeconds < years) {
      const diffMonths = Math.floor(diffInSeconds / months);
      return `${diffMonths}mo. ago`;
    } else {
      const diffYears = Math.floor(diffInSeconds / years);
      return `${diffYears}yr ago`;
    }
  }