export let Button = ({
  text = "Text Here",
  className = ` bg-[#ff9500] text-white px-2 py-2 md:px-5 md:py-2 text-sm rounded font-medium cursor-pointer `,
  onClick,
  ...props
}) => {
  return (
    <button className={className} onClick={onClick} {...props} >
      {text}
    </button>
  );
};
