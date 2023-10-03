type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div
      className={` border-2 border-primary rounded-full border-t-transparent animate-spin  ${
        className || "h-16 w-16"
      }`}
    />
  );
};
