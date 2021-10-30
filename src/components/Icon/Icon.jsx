const Icon = ({ name, type = 'png' }) => (
  <img alt={name} src={`images/icons/${name}.${type}`} />
);

export default Icon;
