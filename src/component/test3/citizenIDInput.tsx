import React from 'react';
import { Input, Space } from 'antd';
import { Form } from 'antd';

const CitizenIDInput: React.FC<any> = ({ value = '', onChange }) => {
  const segments = value.split('-');
  while (segments.length < 5) segments.push('');

  const handleChange = (index: number, segmentValue: string) => {
    const newSegments = [...segments];
    newSegments[index] = segmentValue;
    onChange(newSegments.join('-'));
  };

  return (
    <Space.Compact>
      <Input
        style={{ width: '8%' }}
        value={segments[0]}
        onChange={(e) => handleChange(0, e.target.value)}
        maxLength={1}
      />
      <span style={{ padding: '8px 8px 0 8px' }}>-</span>
      <Input
        style={{ width: '15%' }}
        value={segments[1]}
        onChange={(e) => handleChange(1, e.target.value)}
        maxLength={4}
      />
      <span style={{ padding: '8px 8px 0 8px' }}>-</span>
      <Input
        style={{ width: '15%' }}
        value={segments[2]}
        onChange={(e) => handleChange(2, e.target.value)}
        maxLength={5}
      />
      <span style={{padding: '8px 8px 0 8px' }}>-</span>
      <Input
        style={{ width: '12%' }}
        value={segments[3]}
        onChange={(e) => handleChange(3, e.target.value)}
        maxLength={2}
      />
      <span style={{ padding: '8px 8px 0 8px' }}>-</span>
      <Input
        style={{ width: '8%' }}
        value={segments[4]}
        onChange={(e) => handleChange(4, e.target.value)}
        maxLength={1}
      />
    </Space.Compact>
  );
};

export default CitizenIDInput;