import React, { useState } from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';



const Test1: React.FC = () => {


    const { t } = useTranslation();
    const [shapes, setShapes] = useState<string[]>([
        'shape square', 'shape circle', 'shape-oval oval', 'shape2 trapezoid', 'shape2 rectangle', 'shape2 parallelogram',
    ]);
    const [isPosition, setIsPosition] = useState(false);

    const moveShape1 = () => {
        setShapes((prevShapes) => {
            const lastShape = prevShapes[prevShapes.length - 1]; // ดึงข้อมูลตัวสุดท้าย
            const restShapes = prevShapes.slice(0, -1); // ดึงข้อมูลทั้งหมดยกเว้นตัวสุดท้าย

            return [lastShape, ...restShapes];
        });
    };
    const moveShape2 = () => {
        setShapes((prevShapes) => {
            const [firstShape, ...restShapes] = prevShapes;
            return [...restShapes, firstShape];
        });
    };

    const randomShapes = () => {
        setShapes((prevShapes) => {
            const shuffledShapes = [...prevShapes];
            for (let i = shuffledShapes.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledShapes[i], shuffledShapes[j]] = [shuffledShapes[j], shuffledShapes[i]];
            }
            return shuffledShapes;
        });
    };

    const group1 = () => {
        return (
            <div className="buttons">
                <div></div>
                <Card className="shape-card">
                    <div className={`${shapes[2]}`} onClick={randomShapes}></div>
                </Card>
                <Card className="shape-card" >
                    <div className={`${shapes[1]}`} onClick={randomShapes}></div>
                </Card>
                <Card className="shape-card">
                    <div className={`${shapes[0]}`} onClick={randomShapes}></div>
                </Card>
            </div>
        )
    }
    const group2 = () => {
        return (
            <div className="buttons end">
                <Card className="shape-card">
                    <div className={`${shapes[5]}`} onClick={randomShapes}></div>
                </Card>
                <Card className="shape-card">
                    <div className={`${shapes[4]}`} onClick={randomShapes}></div>
                </Card>
                <Card className="shape-card">
                    <div className={`${shapes[3]}`} onClick={randomShapes}></div>
                </Card>
            </div>
        )
    }

    return (
        <>
            <h1>{t('test1')}</h1>
            <div className="Test1">
                <div className="buttons head">
                    <Card className="shape-card " onClick={moveShape1} >
                        <div className='b-shape triangle' style={{ transform: `rotate(-90deg)` }}></div>
                        <span>{t('t1_btn1')}</span>
                    </Card>
                    <Card className="shape-card col" onClick={() => setIsPosition(!isPosition)}>
                        <div className='col'>
                            <div className='b-shape triangle'></div>
                            <div className='b-shape triangle' style={{ transform: `rotate(180deg)` }}></div>
                        </div>
                        <span style={{ display: 'flex', justifyContent: 'center' }}>{t('t1_btn2')}</span>
                    </Card>

                    <Card className="shape-card" onClick={moveShape2}>
                        <div className='b-shape triangle' style={{ transform: `rotate(90deg)` }}></div>
                        <span>{t('t1_btn1')}</span>
                    </Card>
                </div>
                {!isPosition ? group1() : group2()}
                {isPosition ? group1() : group2()}
            </div>
        </>
    );
};

export default Test1;