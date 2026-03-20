import { useState,useEffect } from "react";

type User = {
  name: string;
  age: number;
  email: string;
};

const App = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
  console.log(userData);
}, [userData]);

  function collectUsers(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user: User = {
      name,
      age: Number(age),
      email,
    };

    setUserData((prev) => [...prev, user]);

    setName("");
    setAge(0);
    setEmail("");

  }

  return (
    <div>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Email : {email}</h3>

      <form onSubmit={collectUsers} noValidate>
        <input className="bg-pink-200"
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
        className="bg-pink-600"
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />

        <input
        className="bg-pink-800"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;