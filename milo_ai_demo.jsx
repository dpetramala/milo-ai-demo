import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MiloDemo() {
  const [lesson, setLesson] = useState("");
  const [studentName, setStudentName] = useState("");
  const [profileType, setProfileType] = useState("Visual Learner");
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    const responses = {
      "Visual Learner": `${studentName} will receive a diagram and interactive drag-and-drop activity to compare fractions visually.`,
      "Auditory Learner": `${studentName} will receive step-by-step narrated instructions and a read-aloud explanation of each fraction.`,
      "IEP Support": `${studentName} will receive simplified language, pauses for comprehension, and check-in questions at each step.`
    };
    setOutput(responses[profileType]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Milo: Personalized Teaching Demo</h1>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">1. Teacher Input</h2>
          <Input
            placeholder="Enter today's lesson (e.g., Fractions: Comparing Sizes)"
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
          />
          <Input
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded"
            value={profileType}
            onChange={(e) => setProfileType(e.target.value)}
          >
            <option value="Visual Learner">Visual Learner</option>
            <option value="Auditory Learner">Auditory Learner</option>
            <option value="IEP Support">IEP Support</option>
          </select>
          <Button onClick={handleGenerate}>Generate Personalized Instruction</Button>
        </CardContent>
      </Card>

      {output && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">2. Milo's Instruction</h2>
            <p className="mt-2 text-lg">{output}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
