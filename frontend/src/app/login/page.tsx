import InputWithIcon from '@/Components/InputWithIcon/InputWithIcon';
import { IconKey, IconUserCircle } from '@tabler/icons-react';
import { Button } from 'rsuite';

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-linear-to-r from-gray-300 via-gray-500 to-gray-700">
      <div className="rounded-lg bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 p-0.5">
        <div className="w-fit bg-white rounded-lg  p-15 flex flex-col gap-8 h-1/2">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
            Login
          </h2>
          <div className="rounded-lg bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 p-0.5">
            <InputWithIcon
              Icon={<IconUserCircle />}
              placeholder="Email address or Username"
            />
          </div>
          <div className="rounded-lg bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 p-0.5">
            <InputWithIcon
              Icon={<IconKey />}
              placeholder="Password"
              type="password"
            />
          </div>
          <Button
            style={{
              fontSize: '20px',
              backgroundColor: 'rgb(75 66 221)',
              color: 'white',
              width: '110px',
              padding: '10px',
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
