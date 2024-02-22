import React from 'react';
import {View} from 'react-native';
import {isEmpty} from 'rambdax';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {theme} from 'theme';
import {useConnectionState} from 'state/useConnectionState';
import {useSearch} from 'state/useSearch';
import {useActivities} from 'state/useActivities';
import {activitiesSearchState} from 'state/atoms';
import {
  ActivitiesList,
  SearchResults,
  LoadingSkeleton,
  NoInternetEmptyState,
} from 'components';

export const ActiviriesScreen = React.memo(function ActiviriesScreen() {
  const isConnected = useConnectionState();
  const navigation = useNavigation();
  const {loading} = useActivities();
  const {
    debouncedSearch,
    setSearch,
    loading: sLoading,
  } = useSearch({
    atom: activitiesSearchState,
    entity: 'activities',
  });

  useFocusEffect(() =>
    navigation.addListener('beforeRemove', () => {
      setSearch('');
    }),
  );
  
  // render "error" if not connected
  if (!isConnected) {
    return <NoInternetEmptyState />;
  }

  // render loading
  if (loading || sLoading) {
    return <LoadingSkeleton />;
  }

  // conditional rendering of the list or search results
  return (
    <View style={theme.appWrapper}>
      {isEmpty(debouncedSearch) ? (
        <ActivitiesList />
      ) : (
        <SearchResults />
      )}
    </View>
  );
});
