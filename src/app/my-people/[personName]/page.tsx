interface MyPeopleProps {
  params: {
    personName: string;
  };
}
const MyPeople = async ({ params }: MyPeopleProps) => {
  const { personName } = await params;
  return <div>{personName}</div>;
};

export default MyPeople;
