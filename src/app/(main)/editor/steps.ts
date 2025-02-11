import { EditorFormProps } from "@/lib/type";
import EducationForm from "./form/EducationForm";
import GeneralInfoForm from "./form/GeneralInfoForm";
import PersonalInfoForm from "./form/PersonalInfoForm";
import SkillsForm from "./form/SkillsForm";
import SummaryForm from "./form/SummaryForm";
import WorkExperienceForm from "./form/WorkExperienceForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  { title: "Education", component: EducationForm, key: "education" },
  { title: "Skills", component: SkillsForm, key: "skills" },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];
