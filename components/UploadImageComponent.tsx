import OcrReader from "./OcrReader";

const UploadImageComponent = () => {

  return (
    <div className="flex flex-col items-center h-full gap-4">
      <h1 className="text-xl font-bold">Scan Documents</h1>
      <OcrReader />
      {/* <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        capture="environment"
        ref={handleFileInput}
        onChange={handleImageChange}
      />
      {imageObject && (
        <Image
          src={imageObject.imagePreview}
          alt=""
          width="200"
          height="200"
          className="rounded-md"
        />
      )}
      <Button onClick={handleClick}>Upload Photo</Button> */}
    </div>
  );
};

export default UploadImageComponent;
