import {useEffect, useState} from 'react';
import {SectionItem} from '../Section/SectionItem';

export interface Props {
  /**
   * The content of the callout.
   */
  children?: any[] | any;
  /**
   * Callback fired when the list of sectionItems changes
   *
   * @param sectionItems
   */
  onChange: (sectionItems: SectionItem[]) => void;
}

export default function Sections(props: Props) {
  const {children, onChange} = props;

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) return;
    setInitialized(true);

    const sectionItems = children.map((item: any) => {
      return {
        id: item.props.id,
        name: item.props.name
      };
    });

    onChange(sectionItems);
  }, [children, initialized, onChange]);

  return (
    <>{children}</>
  );
};
