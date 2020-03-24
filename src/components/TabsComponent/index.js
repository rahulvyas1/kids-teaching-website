import React from 'react';
import {  DropdownButton, Dropdown } from 'react-bootstrap'
import { TabsWrapper, TabsContainer, TabBox, FilterContainer, ActiveRectangle } from '../../Assets/style'

const TabsComponent = () => {
    return (
        <TabsWrapper>
            <TabsContainer>
                <TabBox>
                    Grades 1-4
                </TabBox>
                <ActiveRectangle>
                    Grades 5-8
                </ActiveRectangle>
                <TabBox>
                    Grades 9-12
                </TabBox>
            </TabsContainer>
            <FilterContainer>
                <div>
                    Showing all courses for Grades 5-8
                </div>
                <div>
                    <DropdownButton id="dropdown-item-button" title="All Courses">
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
            </FilterContainer>
        </TabsWrapper>
    );
}

export default TabsComponent;

