const PageWrapper = ({ children, name, icon = null }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-medium text-gray-600 text-2xl">{name}</p>
        {icon ? icon : null}
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
