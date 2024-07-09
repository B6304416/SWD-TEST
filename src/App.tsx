import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const App: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleCardClick = (path: string) => {
    navigate(path);
  };
  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Card title={t('Htest') + ' 1'} className='app-card' onClick={() => handleCardClick('/test1')}>
            {t('test1')}
          </Card>
          <Card title={t('Htest') + ' 2'} className='app-card' >
            {t('test2')}
          </Card>
          <Card title={t('Htest') + ' 3'} className='app-card' onClick={() => handleCardClick('/test3')}>
            {t('test3')}
          </Card>
        </div>
      </div>
  );
};

export default App;