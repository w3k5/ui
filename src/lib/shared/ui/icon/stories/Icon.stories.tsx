import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName, iconsList } from "../../icon";
import { Text } from "../../typography";
import "../../../styles/index";

export default {
  title: "Icons/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: "number",
      defaultValue: 24,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Icon>;

type IconButtonProps = ComponentProps<typeof Icon>;

const groupIcons = (groupPrefix: string) => {
  return Object.entries(iconsList).filter(([iconName]) =>
    iconName.startsWith(groupPrefix),
  );
};

const Template = ({
  size,
  groupPrefix,
}: IconButtonProps & { groupPrefix: string }) => {
  const icons = groupIcons(groupPrefix);
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {icons.map(([iconName]) => (
        <div
          key={iconName}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            border: "1px solid #f6f6f6",
            padding: "1rem",
            borderRadius: "5px",
            whiteSpace: "wrap",
            wordBreak: "break-all",
            color: "#555964",
          }}
        >
          <Icon name={iconName as IconName} size={size} />
          <Text $level="3XS">{iconName}</Text>
        </div>
      ))}
    </div>
  );
};

const createStory = (groupPrefix: string) => {
  return {
    render: (args) => <Template {...args} groupPrefix={groupPrefix} />,
    argTypes: {
      size: {
        control: "number",
        defaultValue: 24,
      },
    },
  };
};

export const AccessIcons: StoryObj<IconButtonProps> = createStory("Access");
export const AlertIcons: StoryObj<IconButtonProps> = createStory("Alert");
export const ArrowIcons: StoryObj<IconButtonProps> = createStory("Arrow");
export const AssignmentIcons: StoryObj<IconButtonProps> =
  createStory("Assignment");
export const CompanyIcons: StoryObj<IconButtonProps> = createStory("Company");
export const ContentControlsIcons: StoryObj<IconButtonProps> =
  createStory("ContentControls");
export const CopyPasteIcons: StoryObj<IconButtonProps> =
  createStory("CopyPaste");
export const DashboardIcons: StoryObj<IconButtonProps> =
  createStory("Dashboard");
export const DateCalendarIcons: StoryObj<IconButtonProps> =
  createStory("DateCalendar");
export const DevelopmentIcons: StoryObj<IconButtonProps> =
  createStory("Development");
export const DocumentFileIcons: StoryObj<IconButtonProps> =
  createStory("DocumentFile");
export const EditIcons: StoryObj<IconButtonProps> = createStory("Edit");
export const ExpandIcons: StoryObj<IconButtonProps> = createStory("Expand");
export const FavoritesIcons: StoryObj<IconButtonProps> =
  createStory("Favorites");
export const FilterIcons: StoryObj<IconButtonProps> = createStory("Filter");
export const FormValidationIcons: StoryObj<IconButtonProps> =
  createStory("FormValidation");
export const GroupIcons: StoryObj<IconButtonProps> = createStory("Group");
export const HierarchyOrganizationIcons: StoryObj<IconButtonProps> =
  createStory("HierarchyOrganization");
export const HomeIcons: StoryObj<IconButtonProps> = createStory("Home");
export const LoaderIcons: StoryObj<IconButtonProps> = createStory("Loader");
export const LoginIcons: StoryObj<IconButtonProps> = createStory("Login");
export const MenuIcons: StoryObj<IconButtonProps> = createStory("Menu");
export const MessagesIcons: StoryObj<IconButtonProps> = createStory("Messages");
export const MoneyCurrencyIcons: StoryObj<IconButtonProps> =
  createStory("MoneyCurrency");
export const MoveIcons: StoryObj<IconButtonProps> = createStory("Move");
export const NavigateIcons: StoryObj<IconButtonProps> = createStory("Navigate");
export const NetworksIcons: StoryObj<IconButtonProps> = createStory("Networks");
export const NotificationIcons: StoryObj<IconButtonProps> =
  createStory("Notification");
export const PrintIcons: StoryObj<IconButtonProps> = createStory("Print");
export const RemoveAddIcons: StoryObj<IconButtonProps> =
  createStory("RemoveAdd");
export const RestaurantIcons: StoryObj<IconButtonProps> =
  createStory("Restaurant");
export const SaveIcons: StoryObj<IconButtonProps> = createStory("Save");
export const SearchIcons: StoryObj<IconButtonProps> = createStory("Search");
export const SelectIcons: StoryObj<IconButtonProps> = createStory("Select");
export const SettingsIcons: StoryObj<IconButtonProps> = createStory("Settings");
export const ShareIcons: StoryObj<IconButtonProps> = createStory("Share");
export const SignatureIcons: StoryObj<IconButtonProps> =
  createStory("Signature");
export const SizeIcons: StoryObj<IconButtonProps> = createStory("Size");
export const SymbolIcons: StoryObj<IconButtonProps> = createStory("Symbol");
export const SynchronizeIcons: StoryObj<IconButtonProps> =
  createStory("Synchronize");
export const TableIcons: StoryObj<IconButtonProps> = createStory("Table");
export const TagsBookmarksIcons: StoryObj<IconButtonProps> =
  createStory("TagsBookmarks");
export const TextIcons: StoryObj<IconButtonProps> = createStory("Text");
export const TextFormattingIcons: StoryObj<IconButtonProps> =
  createStory("TextFormatting");
export const TimeIcons: StoryObj<IconButtonProps> = createStory("Time");
export const ToolIcons: StoryObj<IconButtonProps> = createStory("Tool");
export const UserIcons: StoryObj<IconButtonProps> = createStory("User");
export const ViewIcons: StoryObj<IconButtonProps> = createStory("View");
export const ZoomIcons: StoryObj<IconButtonProps> = createStory("Zoom");
