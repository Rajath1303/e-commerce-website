'use client';
import { IconEye, IconEyeFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { Input, InputGroup } from 'rsuite';

const styles = {
  width: 400,
};

export default function InputWithIcon({
  Icon,
  placeholder,
  type,
}: {
  Icon: React.ReactNode;
  placeholder: string;
  type?: string;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleChange = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <InputGroup style={styles}>
      <InputGroup.Addon>{Icon}</InputGroup.Addon>
      <Input
        style={{
          fontSize: '20px',
          boxShadow: 'none',
          outline: 'none',
          borderColor: 'transparent',
        }}
        placeholder={placeholder}
        type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
      />
      {type && type === 'password' && (
        <InputGroup.Button onClick={handleChange}>
          {isVisible ? <IconEyeFilled /> : <IconEye />}
        </InputGroup.Button>
      )}
    </InputGroup>
  );
}
