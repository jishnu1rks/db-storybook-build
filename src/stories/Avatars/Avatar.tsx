import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarProps = {
  url: string;
  title: string;
};

const AvatarDemo = ({ url, title }: AvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={url} alt={title} />
      <AvatarFallback>{title}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarDemo;
