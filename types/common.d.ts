interface PublicationsItem {
  title: string;
  url: string;
  type: string;
  citation: string;
  subtitle: string;
}

interface PublicationsItemList {
  publications: PublicationsItem[];
}

interface TimelineItem {
  longDate: string;
  title: string;
  content: string;
}

interface TimelineItemList {
  timelineList: TimelineItem[];
}
