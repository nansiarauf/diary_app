import { useState } from "react";
const AddDiary = ({ newDiary }) => {
  const [name, setName] = useState();
  const [offence, setOffence] = useState();
  const [offender, setOffender] = useState();
  const [date, setDate] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    let newdat = {
      name,
      offence,
      offender,
      date,
    };
    newDiary(newdat);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(data) =>
          setName(data.target.value)
        }
        required
      />
      <textarea
        placeholder="Offence"
        onChange={(data) =>
          setOffence(data.target.value)
        }
        required
      ></textarea>
      <input
        type="text"
        placeholder="Offender"
        onChange={(data) =>
          setOffender(data.target.value)
        }
        required
      />
      <input
        type="date"
        onChange={(data) =>
          setDate(data.target.value)
        }
        required
      />
      <button className="btn btn-success">
        ADD OFFENCE
      </button>
    </form>
  );
};

export default AddDiary;
