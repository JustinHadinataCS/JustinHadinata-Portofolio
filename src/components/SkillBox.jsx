function SkillBox({ children, title }) {
  return (
    <div className="flex flex-col items-center space-y-2 p-3 w-20">
      <div className="flex items-center justify-center">{children}</div>
      <p className="text-xs text-gray-600 text-center font-medium">{title}</p>
    </div>
  );
}
export default SkillBox;
