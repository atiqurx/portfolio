import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EventIcon from "@mui/icons-material/Event";

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
          <h1>Supplemental Instruction Leader - CSE 1310</h1>
            <p>UTA Academic Success Center</p>
            <p className="mt-2 opacity-75"> <EventIcon fontSize="small" />  Aug 2023 - Present</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem> */}
        {/* <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" /> */}
          {/* <TimelineConnector /> */}
        {/* </TimelineSeparator> */}
        {/* <TimelineContent>
          <div>
            <h1>Undergraduate Research Assistant</h1>
            <p>University of Texas at Arlington </p>
            <p className="mt-2"> <EventIcon fontSize="small" />  Feb 2024 - Present</p>
          </div>
        </TimelineContent> */}
      {/* </TimelineItem> */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
          <h1>Developement Lead</h1>
            <p>UTA Datathon</p>
            <p className="mt-2 opacity-75"><EventIcon fontSize="small"/>  Feb 2024 - Apr 2024</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h1>Orientation Leader</h1>
            <p>UTA New Maverick Orientation</p>
            <p className="mt-2 opacity-75"> <EventIcon fontSize="small" />  Jan 2023 - Aug 2023</p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
