import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h1>Developement Lead</h1>
            <p>UTA Datathon</p>
            <p></p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div>
            <h1>Undergraduate Research Assistant</h1>
            <p>University of Texas at Arlington </p>
            <p></p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div>
            <h1>Supplemental Instruction Leader - CSE 1310</h1>
            <p>UTA Academic Success Center</p>
            <p></p>
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
            <p></p>
          </div>
        </TimelineContent>
      </TimelineItem>
      
      
    </Timeline>
  );
}
