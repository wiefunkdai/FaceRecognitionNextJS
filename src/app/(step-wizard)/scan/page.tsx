/**
 * SDaiLover Face Recognition for NextJS Framework.
 * 
 * Quickly and easily get started with machine learning technology 
 * that enables identifying and verifying individuals by analyzing 
 * and comparing patterns in their facial features. 
 * 
 * @link      https://www.sdailover.com
 * @email     teams@sdailover.com
 * @copyright Copyright (c) ID 2024 SDaiLover. All rights reserved.
 * @license   https://www.sdailover.com/license.html
 * This software using Yii Framework has released under the terms of the BSD License.
 */
'use client';

/**
 * Copyright (c) ID 2024 SDaiLover (https://www.sdailover.com).
 * All rights reserved.
 *
 * Licensed under the Clause BSD License, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.sdailover.com/license.html
 *
 * This software is provided by the SDAILOVER and
 * CONTRIBUTORS "AS IS" and Any Express or IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, the implied warranties of merchantability and
 * fitness for a particular purpose are disclaimed in no event shall the
 * SDaiLover or Contributors be liable for any direct,
 * indirect, incidental, special, exemplary, or consequential damages
 * arising in anyway out of the use of this software, even if advised
 * of the possibility of such damage.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import classNames from "classnames";
import { redirect } from 'next/navigation';
import { Card, Button, ProgressBar, Alert } from 'react-bootstrap';
import { SDCamsor, SDLoadingDialog, SDErrorDialog, SDSuccessDialog } from '@sdailover/react-aicamsor';
import SDaiLover from "@/app/sdailover.js";

/**
 * SDaiLover Scan page script.
 * 
 * @author    : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.stephanusdai.web.id
 */
export default function Scan() {
    const totalLengthCaptured = 2;
    const videoCamera = React.createRef();
    const canvasCamera = React.createRef();
    const thumbCamera = React.createRef();
    const SDAICamsor = SDaiLover.AICamsor();
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [isValidSuccessful, setValidSuccessful] = React.useState(false);
    const [isVisibleThumbnail, setVisibleThumbnail] = React.useState(false);
    const [isCameraError, setCameraError] = React.useState(false);
    const [isCameraLoading, setCameraLoading] = React.useState(false);
    const [isReadyScanValidation, setReadyScanValidation] = React.useState(false);

    const scanFacePrediction = () => {
        if (!isCameraLoading) {
            setReadyScanValidation(SDAICamsor.hasFaceDetection());
        }
        setTimeout(function() {
            scanFacePrediction();
        }, 1000 / 60);
    }
    const scanFaceCamera = () => {
        SDAICamsor.scanFaceCamera();
        scanFacePrediction();
    }

    const onPrevPage = () => {
        const prevLink = '/take';
        if (typeof window !== "undefined") {
            window.open(prevLink, '_self');
        } else {
            redirect(prevLink);
        }
    }

    const onNextPage = () => {
        const nextLink = '/finish';
        if (typeof window !== "undefined") {
            window.open(nextLink, '_self');
        } else {
            redirect(nextLink);
        }
    }

    const onRefreshPage = () => {
        if (typeof window !== "undefined") {
            window.location.reload();
        }
    }

    const validScanPhoto = () => {
        setReadyScanValidation(false);
        setCameraLoading(true);
        SDAICamsor.validAndSavePhoto(thumbCamera.current)
            .then((successMessage: any) => {
                setErrorMessage(false);
                setVisibleThumbnail(true);
                setCameraLoading(false);
                setTimeout(function() {
                    setVisibleThumbnail(false);
                    setCameraLoading(true);
                    setTimeout(function() {
                        setCameraLoading(false);
                        setValidSuccessful(true);
                    }, 1000);
                }, 3000);
                console.log(successMessage);
            })
            .catch((errorMessage: any) => {
                setVisibleThumbnail(true);
                setTimeout(function() {
                    setVisibleThumbnail(false);
                    setCameraLoading(true);
                    setTimeout(function() {
                        setCameraLoading(false);
                        setErrorMessage(errorMessage.message);
                    }, 1000);
                }, 3000);
                console.error(errorMessage);
            });
    }

    React.useEffect(() => {
        setCameraLoading(true);
        const photoCaptured = SDAICamsor.getCapturePhoto();
        const photoAccurated = SDAICamsor.getAccuratePhoto();
        if (photoCaptured == null || photoCaptured.length == 0 || photoCaptured.length < totalLengthCaptured) {
            onPrevPage();
        }
        if (photoAccurated != null) {
            SDAICamsor.resetAccuratePhoto();
        }
        SDAICamsor.run(videoCamera.current, canvasCamera.current)
            .then((successMessage: any) => {
                setCameraError(false);
                setCameraLoading(false);
                scanFaceCamera();
                console.log(successMessage);
            })
            .catch((errorMessage: any) => {
                setCameraError(true);
                setCameraLoading(false);
                setErrorMessage(errorMessage.message);
                console.error(errorMessage);
            });
    }, []);

    return (
        <>
            <Card>
                <Card.Header>Valid Face on Camera</Card.Header>
                <Card.Body>
                    <div className="sd-overlay-wrap">
                        <SDSuccessDialog visible={isValidSuccessful} onButtonClick={onNextPage} />
                        <SDErrorDialog onButtonClick={onRefreshPage} visible={isCameraError} />
                        <SDCamsor videoRef={videoCamera} canvasRef={canvasCamera} thumbRef={thumbCamera}
                            thumbClassName={classNames('canvas-preview', isVisibleThumbnail ? 'active' : 'hidden')}
                            hidden={isCameraError || isValidSuccessful} />
                        <SDLoadingDialog visible={isCameraLoading} />
                    </div>
                    <Alert variant='danger' className="mt-3" show={errorMessage}>
                        {errorMessage}
                    </Alert>
                </Card.Body>
                <Card.Footer className="text-center" hidden={isCameraError || isValidSuccessful}>
                    <Button variant="danger" size="lg" className="rounded-5 mb-3" onClick={validScanPhoto} disabled={!isReadyScanValidation}>
                        <i className="bi bi-record-fill fs-2 text-white fw-bold"></i>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}
