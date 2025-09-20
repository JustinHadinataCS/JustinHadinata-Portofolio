function SkillBox({ children, title }) {
  return (
    <div className="flex flex-col space-y-2">
      {children}
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}

export default SkillBox;
