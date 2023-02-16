import React, { forwardRef } from "react";
import {
  Link,
  Stack,
  Icon,
  mergeStyleSets,
  ActivityItem,
  StackItem,
} from "@fluentui/react";
import TestImages from "../images/Sunflower.jpg";

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: "20px",
  },
  nameText: {
    fontWeight: "bold",
  },
  InputText: {
    marginTop: "20px",
  },
});

const activityItemExamples = [
  {
    key: 1,
    activityDescription: [
      <Link
        key={1}
        className={classNames.nameText}
        onClick={() => {
          alert("A name was clicked.");
        }}
      >
        Philippe Lampros
      </Link>,
      <span key={2}> commented</span>,
    ],
    activityIcon: <Icon iconName={"Message"} />,
    comments: [
      <span key={1}>Hello! I am making a comment and mentioning </span>,
      <Link
        key={2}
        className={classNames.nameText}
        onClick={() => {
          alert("An @mentioned name was clicked.");
        }}
      >
        @Anđela Debeljak
      </Link>,
      <span key={3}> in the text of the comment.</span>,
    ],
    activityPersonas: [{ imageUrl: TestImages }],
    isCompact: true,
    timeStamp: "Just now",
  },
  {
    key: 2,
    activityDescription: [
      <Link
        key={1}
        className={classNames.nameText}
        onClick={() => {
          alert("A name was clicked.");
        }}
      >
        Lisha Refai
      </Link>,
      <span key={2}> deleted </span>,
      <span key={3} className={classNames.nameText}>
        DocumentTitle.docx
      </span>,
    ],
    activityIcon: <Icon iconName={"Trash"} />,
    activityPersonas: [
      { imageInitials: "JM", text: "Javiera Márquez" },
      { imageUrl: TestImages },
    ],
    timeStamp: "2 hours ago",
  },
  {
    key: 3,
    activityDescription: [
      <Link
        key={1}
        className={classNames.nameText}
        onClick={() => {
          alert("A name was clicked.");
        }}
      >
        Julian Arvidsson
      </Link>,
      <span key={2}> moved </span>,
      <Link
        key={3}
        className={classNames.nameText}
        onClick={() => {
          alert("A document was clicked.");
        }}
      >
        PresentationTitle.pptx
      </Link>,
      <span key={4}> to </span>,
      <Link
        key={5}
        className={classNames.nameText}
        onClick={() => {
          alert("A folder was clicked.");
        }}
      >
        Destination Folder
      </Link>,
    ],
    activityIcon: <Icon iconName={"FabricMovetoFolder"} />,
    activityPersonas: [
      { imageInitials: "JC", text: "Jin Cheng" },
      { imageUrl: TestImages },
      { imageInitials: "AL", text: "Annie Lindqvist" },
      { imageInitials: "JC", text: "Jin Cheng" },
    ],

    timeStamp: "Yesterday",
  },
];
interface propspro {
  data: {
    name: string;
    age: number;
  };
}
export const ActivityList: any = forwardRef((props: propspro, ref: any) => {
  const { data } = props;
  return (
    <>
      <Stack>
        <StackItem>
          {activityItemExamples.map((itm) => (
            <ActivityItem
              {...itm}
              key={itm.key}
              className={classNames.exampleRoot}
            />
          ))}
        </StackItem>
        <StackItem>
          <input
            type="text"
            placeholder="Enter string"
            ref={ref}
            className={classNames.InputText}
          />
        </StackItem>
        <StackItem>
          {data.name} {data.age}
        </StackItem>
      </Stack>
    </>
  );
});
