const Diary = ({ initData: diaries, del }) => {
  return (
    <div className="container">
      {diaries.map((diaries) => (
        <div className="diary">
          <p>
            <h4>NAME OF REPORTER:</h4>
            {diaries.name}
          </p>
          <h3>OFFENCE:{diaries.offence}</h3>
          <h3>OFFENDER:{diaries.offender}</h3>
          <h3>DATE:{diaries.date}</h3>
          <button
            className="btn btn-success"
            onClick={() => del(diaries.date)}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

export default Diary;
