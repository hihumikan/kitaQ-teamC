import "react-image-crop/dist/ReactCrop.css";

import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";

import ReactCrop, {
  centerCrop,
  Crop,
  makeAspectCrop,
  PercentCrop,
  PixelCrop,
} from "react-image-crop";

import { canvasPreview } from "./canvasPreview";
import { Button } from "@chakra-ui/react";

export const ImageCropper = ({
  open,
  setOpen,
  aspect,
  src,
  previewCanvasRef,
  setCroppedFile,
}) => {
  const imgRef = useRef(null);

  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();

  const handleChange = useCallback((_, percentCrop) => {
    setCrop(percentCrop);
  }, []);

  const handleComplete = useCallback((c) => {
    setCompletedCrop(c);
  }, []);

  const handleImageLoad = useCallback(
    (e) => {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect.width / aspect.height));
    },
    [aspect]
  );

  const handleConfirm = useCallback(() => {
    previewCanvasRef.current?.toBlob((blob) => {
      if (blob) {
        setCroppedFile(
          new File([blob], "croppedImage.png", {
            type: "image/png",
          })
        );
      }
    });
    setOpen(false);
  }, [previewCanvasRef, setCroppedFile, setOpen]);

  useEffect(() => {
    if (imgRef.current && previewCanvasRef?.current && completedCrop) {
      canvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        completedCrop,
        1,
        0
      );
    }
  }, [completedCrop]);

  return (
    <>
      {open && (
        <FlexBox>
          <CropperBox>
            <ReactCrop
              crop={crop}
              onChange={handleChange}
              onComplete={handleComplete}
              aspect={aspect.width / aspect.height}
            >
              <img
                ref={imgRef}
                alt="cropped-img"
                src={src}
                onLoad={handleImageLoad}
                style={{ maxHeight: "300px" }}
                crossOrigin="anonymous"
              />
            </ReactCrop>
          </CropperBox>
          <Button onClick={handleConfirm}>確定</Button>
        </FlexBox>
      )}
    </>
  );
};

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

const CropperBox = styled.div`
  margin-bottom: 15px;
`;

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "px",
        width: 130,
        height: 130,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default ImageCropper;
