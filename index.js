const headline = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const list = React.createElement('ul', {className: 'me__interests'},
  React.createElement('li', {}, 'JavaScript'),
  React.createElement('li', {}, 'React'),
  React.createElement('li', {}, 'Movies'),
  React.createElement('li', {}, 'Ice cream')
);
const meInReact = React.createElement('div', {className: 'me'}, [headline, paragraph, list]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
