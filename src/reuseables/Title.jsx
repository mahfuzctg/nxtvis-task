const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center my-8">
      <h3 className=" font-bold text-[#6366F1] uppercase">{title}</h3>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default Title;
