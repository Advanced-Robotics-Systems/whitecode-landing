export interface PrivacyPolicyList {
  title: string;
  listItem: string[];
}

export interface PrivacyPolicySubSection {
  title: string;
  subtitle: string;
  content: string[];
}
export interface PrivacyPolicySection {
  title: string;
  list?: PrivacyPolicyList;
  introduction: string[];
  subSections?: PrivacyPolicySubSection[];
}

export interface PrivacyPolicyData {
  title: string;
  sections: PrivacyPolicySection[];
}

export interface Blog {
  id: string;
  title: string;
}

export interface BlogListProps {
  blogs: Blog[];
}
