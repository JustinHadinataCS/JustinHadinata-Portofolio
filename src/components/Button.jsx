function Button({ children, variant = "default" }) {
  const getButtonClasses = () => {
    const baseClasses =
      "px-5 py-3 rounded-lg font-bold transition-colors duration-200 inline-flex items-center justify-center gap-2 text-base leading-none";

    switch (variant) {
      case "purple":
        return `${baseClasses} bg-purple-500 text-white hover:bg-purple-600`;
      case "gray":
        return `${baseClasses} bg-gray-300 text-black hover:bg-gray-400`;
      case "default":
      default:
        return `${baseClasses} bg-black text-white hover:bg-gray-800`;
    }
  };

  return <button className={getButtonClasses()}>{children}</button>;
}

export default Button;
