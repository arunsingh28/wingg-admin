import { useLoaderData } from "@remix-run/react";
import { IoIosArrowDown } from "react-icons/io";
import { Select, Button } from "antd";

export const loader = async () => {
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      role: "User",
      isPendingInvite: true,
    },
    {
      id: 3,
      name: "John Doe 12",
      email: "john@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "Admin",
    },
    {
      id: 4,
      name: "Jane Smith 12",
      email: "jane@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      role: "User",
      isPendingInvite: true,
    },
  ];
};

const Users = () => {
  const products = useLoaderData<typeof loader>();

  return (
    <div>
      {products.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Role:</strong> {user.role}
          </div>
          <div>
            <Select
              options={[
                { label: "Member", value: "1" },
                { label: "Admin", value: "2" },
              ]}
              defaultValue={user?.role}
              className="w-[100px]"
            >
              <Button icon={<IoIosArrowDown />} iconPosition="end">
                Hover me
              </Button>
            </Select>
          </div>
          <div>{user.isPendingInvite && <p>invite pending...</p>}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
