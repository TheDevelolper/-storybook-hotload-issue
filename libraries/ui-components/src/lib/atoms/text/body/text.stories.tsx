export default {
  title: 'Text Components',
};

const Template: () => JSX.Element = (): JSX.Element => <>
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>This is a paragraph of body text. It should be readable and clearly distinguishable from the headings.</p>
    <small>This is small text, typically used for disclaimers or secondary information.</small>
  </div>
</>;

export const Default: () => JSX.Element = Template.bind({});
// Default.args = {};