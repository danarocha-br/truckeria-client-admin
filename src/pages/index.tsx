import Logo from 'components/Logo';
import SwitchCustom from 'components/Switch';

export default function Home() {
  return (
    <div className="h-full w-full">
      <SwitchCustom />
      <Logo></Logo>
    </div>
  );
}
