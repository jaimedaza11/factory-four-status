import "./styles.css";

interface Props {
  firstValidDate: Date | null;
}

const UpdateTime = ({ firstValidDate }: Props) => {
  return (
    <>
      <p>Approximate time of the last update:</p>
      {firstValidDate && (
        <p className="timestamp">
          {String(firstValidDate.getHours()).padStart(2, "0")}:
          {String(firstValidDate.getMinutes()).padStart(2, "0")}:
          {String(firstValidDate.getSeconds()).padStart(2, "0")}
        </p>
      )}
    </>
  );
};

export default UpdateTime;
