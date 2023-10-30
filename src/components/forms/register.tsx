import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface RegisterFormProps {
  name: string;
  email: string;
  nameOnChange: (value: string) => void;
  emailOnChange: (value: string) => void;
}

export function RegisterForm({
  name,
  email,
  nameOnChange,
  emailOnChange,
}: RegisterFormProps) {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => nameOnChange(e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={email}
          onChange={(e) => emailOnChange(e.target.value)}
          className="col-span-3"
        />
      </div>
    </div>
  );
}
