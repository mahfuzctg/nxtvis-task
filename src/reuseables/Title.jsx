const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default Title;
