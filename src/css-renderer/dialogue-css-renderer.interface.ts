export interface IDialogueCssRenderer {
  timeline: GSAPTimeline;
  element: HTMLElement;
  render: () => IDialogueCssRenderer;
  updateTimeline: () => IDialogueCssRenderer;
}
