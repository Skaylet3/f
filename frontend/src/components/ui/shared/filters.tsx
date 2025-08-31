import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../input';
import { RangeSlider } from '../range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold'/>

      {/* the upper checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text='Create your own' value='1'/>
        <FilterCheckbox text='Latest' value='2'/>
      </div>

      {/* the price filter */}
      <div className="mt-5 border-y border-neutral-100 py-6 pb-7">
        <p className='font-bold mb-3'>Price from to</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={2} max={300} defaultValue={0}/>
          <Input type='number' placeholder='5' min={5} max={300}/>
        </div>

        <RangeSlider min={0} max={100} step={1} value={[0, 100]}/>
      </div>
      
      <CheckboxFiltersGroup 
        title="Ingredients"
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: 'Cheese sauce',
            value: '1', 
          },
          {
            text: 'Mozzarella',
            value: '2', 
          },
          {
            text: 'Garlic',
            value: '3', 
          },
          {
            text: 'Pickled cucumbers',
            value: '4', 
          },
          {
            text: 'Red onion',
            value: '5', 
          },
          {
            text: 'Tomatoes',
            value: '6', 
          },
        ]}
        items={[
          {
            text: 'Cheese sauce',
            value: '1', 
          },
          {
            text: 'Mozzarella',
            value: '2', 
          },
          {
            text: 'Garlic',
            value: '3', 
          },
          {
            text: 'Pickled cucumbers',
            value: '4', 
          },
          {
            text: 'Red onion',
            value: '5', 
          },
          {
            text: 'Tomatoes',
            value: '6', 
          },
          {
            text: 'Cheese sauce',
            value: '1', 
          },
          {
            text: 'Mozzarella',
            value: '2', 
          },
          {
            text: 'Garlic',
            value: '3', 
          },
          {
            text: 'Pickled cucumbers',
            value: '4', 
          },
          {
            text: 'Red onion',
            value: '5', 
          },
          {
            text: 'Tomatoes',
            value: '6', 
          },
          {
            text: 'Cheese sauce',
            value: '1', 
          },
          {
            text: 'Mozzarella',
            value: '2', 
          },
          {
            text: 'Garlic',
            value: '3', 
          },
          {
            text: 'Pickled cucumbers',
            value: '4', 
          },
          {
            text: 'Red onion',
            value: '5', 
          },
          {
            text: 'Tomatoes',
            value: '6', 
          },
          {
            text: 'Cheese sauce',
            value: '1', 
          },
          {
            text: 'Mozzarella',
            value: '2', 
          },
          {
            text: 'Garlic',
            value: '3', 
          },
          {
            text: 'Pickled cucumbers',
            value: '4', 
          },
          {
            text: 'Red onion',
            value: '5', 
          },
          {
            text: 'Tomatoes',
            value: '6', 
          },
        ]}
      />
    </div>
  );
};