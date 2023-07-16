import { Table, User } from "@nextui-org/react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const NextTable = ({ data }) => {
  const columns = [
    {
      key: "clientName",
      label: "Ad Soyad",
    },
    {
      key: "age",
      label: "Yaş",
    },
    {
      key: "subType",
      label: "Statü",
    },
    {
      key: "clientHeight",
      label: "Boy",
    },
    {
      key: "clientWeight",
      label: "Kilo",
    },
    {
      key: "clientPhysical",
      label: "Fiziksel",
    },
    {
      key: "actions",
      label: "İşlemler",
    },
  ];

  const editHandler = (id) => {
    // Handle the edit functionality here
    console.log("Edit clicked for ID:", id);
  };

  const deleteHandler = (id) => {
    // Handle the delete functionality here
    console.log("Delete clicked for ID:", id);
  };

  return (
    <Table
      aria-label="Örnek dinamik içeriğe sahip tablo"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={data}>
        {(item) => (
          <Table.Row key={item.id}>
            {(columnKey) => {
              if (columnKey === "clientName") {
                return (
                  <Table.Cell>
                    <User
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      name={item[columnKey]}
                      description={item.clientMail}
                      size="md"
                      pointer
                      bordered
                      css={{ maxWidth: "50%" }}
                    />
                  </Table.Cell>
                );
              } else if (columnKey === "actions") {
                return (
                  <Table.Cell>
                    <div>
                      <button onClick={() => editHandler(item.id)}>
                        <BiEdit />
                      </button>
                      <button onClick={() => deleteHandler(item.id)}>
                        <BiTrashAlt />
                      </button>
                    </div>
                  </Table.Cell>
                );
              }
              return <Table.Cell>{item[columnKey]}</Table.Cell>;
            }}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={8}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
  );
};

export default NextTable;
