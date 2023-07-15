import { useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  gender: "male",
  rank: "1",
  days: "1",
  display: false,
  result: 0,
};

export default function Form() {
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      display: true,
      result: 1200 * +formData.rank * +formData.days,
    });
    console.log(formData);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-[10px]">
          <div>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <select
              placeholder="Rank"
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, rank: e.target.value }))
              }
            >
              <option value="1">Rank 1</option>
              <option value="2">Rank 2</option>
              <option value="3">Rank 3</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder="Days in hospital"
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, days: e.target.value }))
              }
            />
          </div>
          {formData.display && formData.result > 0 && (
            <div>
              Tên {formData.fullName}, Rank {formData.rank}, money{" "}
              {formData.result}
            </div>
          )}
          {formData.result < 0 && <div>Số ngày không được nhỏ hơn 0</div>}

          <button>Check</button>
        </div>
      </form>
    </>
  );
}
